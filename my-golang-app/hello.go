
package main

import ("fmt"
		"time"
);


func main() {

	fmt.Println("Hello ASL!")

	currentTime := time.Now() 
	fmt.Println(currentTime.Format("2006-01-01"))
}
