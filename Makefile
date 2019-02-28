.PHONY: pug

pug: templates/index.pug
	pug templates/* --out .
