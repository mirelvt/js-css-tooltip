CSS_DEPS = $(wildcard scss/_*.scss)
CSS_SRCS = $(filter-out _%, $(notdir $(wildcard scss/*.scss)))
CSS_OBJS = $(patsubst %.scss, css/%.css, $(CSS_SRCS))
CSS_MIN_OBJS = $(patsubst %.css, %.min.css, $(CSS_OBJS))

ALL_OBJS =  $(CSS_OBJS) $(CSS_MIN_OBJS)

all: $(ALL_OBJS)

css/%.css: scss/%.scss $(CSS_DEPS)
	scss $< $@

%.min.css: %.css
	scss --sourcemap=none --style compressed $< $@

watch:
	scss --watch scss:css

clean:
	rm -f $(ALL_OBJS)

.PHONY: all clean watch

.SUFFIXES:
.SUFFIXES: .css