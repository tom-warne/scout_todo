class List < ApplicationRecord
  has_many :tasks, dependent: :destroy

  validates :date, presence: true
end
