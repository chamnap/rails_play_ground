# frozen_string_literal: true

# == Schema Information
#
# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  content    :text
#  privacy    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  PRIVACIES = [ 'public', 'private' ]
  has_rich_text :content

  # Validations
  validates     :content, presence: true
  validates     :privacy, presence: true, inclusion: { in: PRIVACIES }
end
