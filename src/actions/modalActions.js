// Country modal actions
export const openCountryModal = modalCountry => {
  return dispatch => {
    dispatch({ type: "OPEN_COUNTRY_MODAL", modalCountry: modalCountry })
  }
}

export const closeCountryModal = () => {
  return dispatch => {
    dispatch({ type: "CLOSE_COUNTRY_MODAL" })
  }
}

// Edit Profile modal actions
export const openEditProfileModal = modalProfile => {
  return dispatch => {
    dispatch({ type: "OPEN_EDIT_PROFILE_MODAL", modalProfile: modalProfile })
  }
}

export const closeEditProfileModal = () => {
  return dispatch => {
    dispatch({ type: "CLOSE_EDIT_PROFILE_MODAL" })
  }
}

/*
There are two different actions that will open up the Post Modal. The first one
opens up the Post modal with a blank form and a Post Submit function, and the
second action passes in a trip report, and opens up the Post Modal with the forms
autofilled with the trip report's details. The submit function will update the
trip report.
*/
export const openPostModal = () => {
  return dispatch => {
    dispatch({ type: "OPEN_POST_MODAL" })
  }
}

export const openUpdatePostModal = modalPost => {
  return dispatch => {
    dispatch({ type: "OPEN_UPDATE_POST_MODAL" , modalPost: modalPost })
  }
}

export const closePostModal = () => {
  return dispatch => {
    dispatch({ type: "CLOSE_POST_MODAL" })
  }
}

// Confirm Delete modal actions
export const openConfirmDeleteModal = modalPost => {
  return dispatch => {
    dispatch({ type: "OPEN_CONFIRM_DELETE_MODAL" , modalPost: modalPost })
  }
}

export const closeConfirmDeleteModal = () => {
  return dispatch => {
    dispatch({ type: "CLOSE_CONFIRM_DELETE_MODAL" })
  }
}

// Trip Report modal actions
export const openTripReportModal = modalPost => {
  return dispatch => {
    dispatch({ type: "OPEN_TRIP_REPORT_MODAL" , modalPost: modalPost })
  }
}

export const closeTripReportModal = () => {
  return dispatch => {
    dispatch({ type: "CLOSE_TRIP_REPORT_MODAL" })
  }
}

// Not Authenticated modal actions
export const openNotAuthModal = () => {
  return dispatch => {
    dispatch({ type: "OPEN_NOT_AUTH_MODAL" })
  }
}

export const closeNotAuthModal = () => {
  return dispatch => {
    dispatch({ type: "CLOSE_NOT_AUTH_MODAL" })
  }
}

// Copy Link modal actions
export const openCopyLinkModal = modalLink => {
  return dispatch => {
    dispatch({ type: "OPEN_COPY_LINK_MODAL", modalLink: modalLink })
  }
}

export const closeCopyLinkModal = () => {
  return dispatch => {
    dispatch({ type: "CLOSE_COPY_LINK_MODAL" })
  }
}

// Image modal actions
export const openImageModal = modalImage => {
  return dispatch => {
    dispatch({ type: "OPEN_IMAGE_MODAL", modalImage: modalImage })
  }
}

export const closeImageModal = () => {
  return dispatch => {
    dispatch({ type: "CLOSE_IMAGE_MODAL" })
  }
}
