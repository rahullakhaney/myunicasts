class Library < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name, use: [:slugged, :finders]

  has_many :lessons

  has_many :subscriptions
  has_many :users, through: :subscriptions

  validates :name, presence: true, length: { maximum: 50 }
  validates :content, presence: true, length: { maximum: 5000 }
  validates :price, presence: true, numericality: { only_integer: true }
  validates :read_time, presence: true, numericality: { only_integer: true }
end
