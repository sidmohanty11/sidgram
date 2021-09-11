package controllers

import (
	"backend/models"
	"net/http"

	"github.com/labstack/echo/v4"
)

func GetAllPostsByFollowers(c echo.Context) error {
	return c.JSON(http.StatusAccepted, "")
}

func PostComment(c echo.Context) error {
	post := new(models.Post)
	res, err := DB.Model(post).
		Returning("*").Insert()

	if err != nil {
		panic(err)
	}
	return c.JSON(http.StatusAccepted, res)
}

func LikePost(c echo.Context) error {
	return c.JSON(http.StatusAccepted, "")
}
