const generateUniqueId = () => {
  return Math.random().toString(16).slice(2, 8)
}

export default generateUniqueId
