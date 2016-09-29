CSS_DEPS = $(wildcard scss/_*.scss)
CSS_SRCS = $(filter-out _%, $(notdir $(wildcard scss/*.scss)))
CSS_OBJS = $(patsubst %.scss, css/%.css, $(CSS_SRCS))
CSS_MIN_OBJS = $(patsubst %.css, %.min.css, $(CSS_OBJS))

JS_OBJS = $(patsubst %.src.js, %.min.js, $(wildcard js/[a-z]*.src.js))

ALL_OBJS =  $(CSS_OBJS) $(CSS_MIN_OBJS) $(JS_OBJS)

all: $(ALL_OBJS)

css/%.css: scss/%.scss $(CSS_DEPS)
	scss $< $@

%.min.css: %.css
	scss --sourcemap=none --style compressed $< $@


%.min.js: %.src.js
	uglifyjs --comments -c hoist_vars=true,join_vars=true -m -r '$$' -o $@ $<

clean:
	rm -f $(ALL_OBJS)

.PHONY: all clean watch

.SUFFIXES:
.SUFFIXES: .css