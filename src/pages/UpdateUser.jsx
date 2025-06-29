import React from "react";
import AddUser from "./AddUser";
import { useParams } from "react-router";
import { useSingleUser, useUpdateUser } from "../hooks/useUsers";
import Loader from "../components/user/Loader";
import ErrorMessage from "../components/user/ErrorMessage";

function UpdateUser() {
  const { id } = useParams();
  const updateMutation = useUpdateUser();
  const { isLoading, isError, data, error } = useSingleUser(id);

  if (isError) {
    return <ErrorMessage message={error.message} />;
  }

  let userData = data ? data.data : {};
  const handleUpdate = async (formData) => {
    const { createdAt, updatedAt, ...cleanData } = formData;
    try {
      await updateMutation.mutateAsync({ ...cleanData, id });
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <AddUser
          pageTitle={
            userData?.fullName ? `Update ${userData.fullName}` : "Update User"
          }
          handleUpdate={handleUpdate}
          userData={userData}
          isPending={updateMutation.isPending}
        />
      )}
    </>
  );
}

export default UpdateUser;
