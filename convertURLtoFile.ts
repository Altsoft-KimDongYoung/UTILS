export const convertURLtoFile = async (url: string, originalFileName?: string) => {
  try {
    const response = await fetch(url);
    const data = await response.blob();
    const ext = url.split('.').pop();
    const filename = originalFileName ?? url.split('/').pop();
    const metadata = { type: ext === 'jpg' ? `image/jpeg` : `image/${ext}` };
    return new File([data], filename!, metadata);
  } catch (error) {
    console.error('Failed to convert URL to File:', error);
    throw error;
  }
};
