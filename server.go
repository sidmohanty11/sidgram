package main

import (
	"backend/controllers"
	"backend/db"
	"backend/router"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()
	e.Use(middleware.Logger())
	router.Setup(e)

	database := db.ConnectDB()
	controllers.ControllersSetup(database)
	// middlewares.Authorize(e)

	defer database.Close()
	e.Logger.Fatal(e.Start(":8080"))
}
