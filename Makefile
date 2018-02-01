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
