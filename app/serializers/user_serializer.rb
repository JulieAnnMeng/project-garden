class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :username, :email, :password_digest
end
