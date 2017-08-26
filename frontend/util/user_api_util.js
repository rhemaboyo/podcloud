export const editUser = (id, data) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}`,
    processData: false,
    contentType: false,
    data: data
  });
};
