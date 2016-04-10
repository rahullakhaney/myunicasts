class Lesson < ActiveRecord::Base
  extend FriendlyId
  friendly_id :title, use: [:slugged, :finders]

  belongs_to :library

  validates :title, presence: true, length: { maximum: 50 }
  validates :note, presence: true
  validates :tag, presence: true
  validates :library, presence: true
end
