alias = react-js-assignment

default: dev

bootstrap:
	make install-yarn
	make yarn-install
	make dev
	echo "Done setup, happy coding!!! :tada:"

yarn-install:
	yarn install

dev:
	yarn run start

test:
	yarn run test

down:
	docker-compose down

build-staging:
	yarn run build_staging

build-production:
	yarn run build_production

install-yarn:
	curl -o- -L https://yarnpkg.com/install.sh | bash
