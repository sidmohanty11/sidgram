package controllers

import (
	"backend/models"
	"net/http"

	"github.com/labstack/echo/v4"
)

func GetUserByUsername(c echo.Context) error {
	username := c.Param("username")
	user := &models.User{}
	err := DB.Model(user).
		Where("username = ?", username).
		Select()

	if err != nil {
		panic(err)
	}

	return c.JSON(http.StatusOK, user)
}

func GetUserByUserId(c echo.Context) error {
	userId := c.Param("id")
	user := &models.User{}
	err := DB.Model(user).
		Where("id = ?", userId).
		Select()

	if err != nil {
		panic(err)
	}

	return c.JSON(http.StatusOK, user)
}

func GetSuggestedIds(c echo.Context) error {
	userId := c.Param("id")
	user := &models.User{}
	err := DB.Model(user).
		Where("id = ?", userId).
		Select()

	if err != nil {
		panic(err)
	}

	return c.JSON(http.StatusOK, user)
}

func ToggleFollow(c echo.Context) error {
	userIdWhoWantsToFollow := c.Param("id")
	userWhoGetsFollowedOrUnfollowed := c.FormValue("id")

	updateLoggedInUserFollowing(userIdWhoWantsToFollow)
	updateFollowedUserFollowers(userWhoGetsFollowedOrUnfollowed)

	return c.JSON(http.StatusOK, echo.Map{"followed": true})
}

func updateLoggedInUserFollowing(id string) {

}

func updateFollowedUserFollowers(id string) {

}
