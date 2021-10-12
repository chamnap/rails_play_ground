# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'pg',                           '~> 1.1.4'
gem 'postgresql-check',             '~> 0.1.3'
gem 'puma',                         '~> 4.3.9'
gem 'rails',                        '~> 6.0.0.rc1'

gem 'american_date',                '~> 1.1.1'
gem 'bootstrap_form',               '~> 4.2.0'
gem 'dotenv-rails',                 '~> 2.7.2'
gem 'nokogiri',                     '~> 1.10.2'

gem 'autoprefixer-rails',           '~> 9.5.1'
gem 'slim-rails',                   '~> 3.2.0'
gem 'sass-rails',                   '~> 5.0.7'
gem 'webpacker',                    '~> 4.0.7'
gem 'turbolinks',                   '~> 5.2.0'
gem 'local_time',                   '~> 2.1.0'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap',                     '~> 1.4.4', require: false

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console',              '~> 4.0.0'
  gem 'listen',                   '~> 3.1.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring',                   '~> 2.0.2'
  gem 'spring-watcher-listen',    '~> 2.0.1'
  gem 'guard-rspec',              '~> 4.7.3', require: false
  gem 'letter_opener',            '~> 1.7.0'
  gem 'binding_of_caller',        '~> 0.7.2'
  gem 'spring-commands-rspec',    '~> 1.0.4'
  gem 'annotate',                 github: 'ctran/annotate_models', ref: '5ac56e4'
  gem 'rubocop',                  '~> 0.70.0', require: false
  gem 'rubocop-performance',      '~> 1.1.0', require: false
end

group :test do
  gem 'capybara',                 '~> 3.24.0'
  gem 'selenium-webdriver',       '~> 4.0.0.alpha2'
  gem 'webdrivers',               '~> 4.0.1',  require: false
  gem 'timecop',                  '~> 0.9.1'
  gem 'json_spec',                '~> 1.1.5'
  gem 'shoulda-matchers',         '~> 4.1.0'
  gem 'rspec-instafail',          '~> 1.0.0',  require: false
  gem 'rails-controller-testing', '~> 1.0.4'
  gem 'simplecov',                '~> 0.16.1', require: false
end

group :test, :development do
  gem 'rspec-rails',                '~> 4.0.0.beta2'
  gem 'rspec-collection_matchers',  '~> 1.1.3'
  gem 'pry-rails',                  '~> 0.3.6'
  gem 'rspec-activemodel-mocks',    '~> 1.0.3'
  gem 'factory_bot_rails',          '~> 4.11.1'
  gem 'faker',                      '~> 1.9.5'
  gem 'database_cleaner',           '~> 1.7.0'
end
