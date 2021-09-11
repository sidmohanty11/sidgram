package router

import (
	"backend/controllers"

	"github.com/labstack/echo/v4"
)

func Setup(e *echo.Echo) {
	// auth routes
	e.POST("/register", controllers.Register)
	e.POST("/login", controllers.Login)
	e.POST("/logout", controllers.Logout)

	// post routes
	e.GET("/posts", controllers.GetAllPostsByFollowers)
	e.POST("/posts/:id/comment", controllers.PostComment)
	e.PATCH("/posts/:id/like", controllers.LikePost)

	// user routes
	e.GET("users/:username", controllers.GetUserByUsername)
	e.GET("users/:id", controllers.GetUserByUserId)
	e.GET("users/:id/suggested", controllers.GetSuggestedIds)
	e.PATCH("users/:id/follow", controllers.ToggleFollow)

	// just for testing purposes
	e.GET("/hello", controllers.Hello)
	e.POST("/test", controllers.Test)
}
