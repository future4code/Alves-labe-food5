export const goToAddressPage = (navigate) => {
    navigate("/address")
}

export const goToFeedPage = (navigate) => {
    navigate("/")
}

export const goToEditPage = (navigate) => {
    navigate("/edit")
}

export const goToRestaurantDetailsPage = (navigate, id) => {
    navigate(`/restaurantdetails/${id}`)
}