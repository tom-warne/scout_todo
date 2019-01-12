class Task < ApplicationRecord
  belongs_to :list

  has_many :tag_tasks, dependent: :destroy
  has_many :tags,      through: :tag_tasks

  validates :title, presence: true
end
