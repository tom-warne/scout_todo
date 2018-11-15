class Task < ApplicationRecord
  belongs_to :list

  validates :complete, :title, presence: true
end
