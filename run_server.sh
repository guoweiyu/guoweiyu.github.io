#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

# Prefer Homebrew Ruby over the older macOS system Ruby.
if [[ -x /opt/homebrew/opt/ruby/bin/ruby ]]; then
  export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
elif [[ -x /usr/local/opt/ruby/bin/ruby ]]; then
  export PATH="/usr/local/opt/ruby/bin:$PATH"
fi

# Use the isolated preview bundle when it is available on this machine.
preview_bundle="$HOME/.cache/guoweiyu-homepage"
if [[ -f "$preview_bundle/Gemfile.lock" ]]; then
  export BUNDLE_IGNORE_CONFIG=1
  export BUNDLE_GEMFILE="$preview_bundle/Gemfile"
  export BUNDLE_PATH="$preview_bundle/gems"
fi

exec bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload "$@"
