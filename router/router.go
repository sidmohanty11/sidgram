package router

import (
	"backend/controllers"

	"github.com/labstack/echo/v4"
)

func Setup(e *echo.Echo) {
	e.GET("/hello", controllers.Hello)
	e.POST("/test", controllers.Test)
}
