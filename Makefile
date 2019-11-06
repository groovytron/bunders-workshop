all: slides

slides: slides.html

slides.html: slides.md
	pandoc -s \
		-f markdown+smart \
		-t revealjs \
		$^ \
		-o $@ \
		-M date="`date "+%B %e, %Y"`" \
		--self-contained \
		--variable theme="black" \
		--variable transition="convex" \
		--variable slideNumber="true" \
		--variable showSlideNumber="true"
