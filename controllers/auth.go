package controllers

import (
	"backend/middlewares"
	"backend/models"
	"net/http"
	"time"

	"github.com/golang-jwt/jwt"
	"github.com/labstack/echo/v4"
)

func Register(c echo.Context) error {
	u := new(models.User)
	if err := c.Bind(u); err != nil {
		return err
	}

	_, err := DB.Model(u).Insert()
	if err != nil {
		return err
	}

	return c.JSON(http.StatusAccepted, u)
}

func Login(c echo.Context) error {
	username := c.FormValue("username")
	password := c.FormValue("password")

	user := &models.User{}
	err := DB.Model(user).
		Where("username = ?", username).
		Select()

	if err != nil {
		panic(err)
	}

	if user.Password != password {
		return c.JSON(http.StatusUnauthorized, "")
	}

	// Set custom claims
	claims := &middlewares.JwtCustomClaims{
		username,
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour * 72).Unix(),
		},
	}

	// Create token with claims
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	// Generate encoded token and send it as response.
	t, err := token.SignedString([]byte("secret"))

	if err != nil {
		panic(err)
	}

	return c.JSON(http.StatusOK, echo.Map{
		"token": t,
	})
}

func Logout(c echo.Context) error {
	return c.JSON(http.StatusAccepted, "")
}
