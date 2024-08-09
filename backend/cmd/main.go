package main

import (
	"log"
	"net/http"
	"tunify_service_site/api"
)

func main() {
    router := api.NewRouter()

    log.Println("Starting server on :8080")
    if err := http.ListenAndServe(":8080", router); err != nil {
        log.Fatalf("Could not start server: %s\n", err.Error())
    }
}