json.extract! user, :id, :username, :email
json.avatar asset_path(user.avatar.url)
json.banner_image asset_path(user.banner_image.url)
