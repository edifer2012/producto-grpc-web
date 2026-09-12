.PHONY: proto web-proto test lint docker-up docker-down docker-logs clean

proto:
	python scripts/generate_proto.py

web-proto:
	./scripts/generate_web_proto.sh

test:
	pytest --cov=app --cov-report=term-missing

lint:
	ruff check app client tests scripts

docker-up:
	docker compose up --build -d

docker-down:
	docker compose down

docker-logs:
	docker compose logs -f

clean:
	docker compose down -v --remove-orphans
