run: 
	docker run -d -p 80:4100 --rm -v "posts_db:/backend/data" --name testname test6
run-dev: 
	docker run -p 80:4100 --rm -v "/Users/mocukov/Desktop/GitHub/docker-test/backend:/backend" -v "posts_db:/backend/data" --name testname test6
stop: 
	docker stop testname