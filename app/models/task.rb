class Task < ApplicationRecord
  belongs_to :list

  has_many :tag_tasks
  has_many :tags, through: :tag_tasks

  validates :title, presence: true
end
