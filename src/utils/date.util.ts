export const getBeautifulDate = (dateStr: string) => {
  try {
    const date = new Date(dateStr)
    return date.toISOString().split('T')[0]
  } catch (e: any) {
    console.log(e)
  }
}
