export function authorizeModification(req, res, next) {
  const requestedUserId = String(req.params.userId);
  const authenticatedUserId = String(req.user.id);

  if (
    req.user.role !== "parent" &&
    authenticatedUserId !== requestedUserId
  ) {
    return res.status(403).json({ error: "Access denied" });
  }

  next();
}
