package controllers

import (
	"backend/middlewares"
	"net/http"
	"time"

	"github.com/golang-jwt/jwt"
	"github.com/labstack/echo/v4"
)

func Register(c echo.Context) error {
	return c.JSON(http.StatusAccepted, "")
}

func Login(c echo.Context) error {
	// username := c.FormValue("username")
	// password := c.FormValue("password")

	// Set custom claims
	claims := &middlewares.JwtCustomClaims{
		"jon",
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour * 72).Unix(),
		},
	}

	// Create token with claims
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	// Generate encoded token and send it as response.
	t, err := token.SignedString([]byte("secret"))
	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, echo.Map{
		"token": t,
	})
}

func Logout(c echo.Context) error {
	return c.JSON(http.StatusAccepted, "")
}
