import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getGetProfileImageQueryKey } from "@workspace/api-client-react";

export function useProfileUpload() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("profile", file);

      // Raw fetch since it's a multipart/form-data upload which can be tricky
      // for generated OpenAPI clients without explicit binary mapping
      const res = await fetch("/api/upload-profile", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to upload image");
      }

      return res.json();
    },
    onSuccess: () => {
      // Invalidate the generated query key to instantly refresh the avatar
      queryClient.invalidateQueries({ queryKey: getGetProfileImageQueryKey() });
    },
  });
}
