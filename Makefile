APP_NAME=angular-5-boilerplate
ORIGIN=origin
SRC_BRANCH=master
DEST_BRANCH=master

run:
	npm start

build:
	npm run build

push:
	git add --all
	git commit
	git push -u $(ORIGIN) $(DEST_BRANCH)

pull:
	git pull -v $(ORIGIN) $(DEST_BRANCH)

pm2-start:
	pm2 start --name $(APP_NAME) startup.sh

stop:
	pm2 stop $(APP_NAME)

restart:
	pm2 restart $(APP_NAME)

logs:
	pm2 logs $(APP_NAME)