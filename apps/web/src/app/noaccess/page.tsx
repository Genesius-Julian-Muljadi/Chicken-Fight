export default function NoAccess() {
  return (
    <div
      aria-label="Unauthorized to view this page"
      className="h-full w-full flex"
    >
      <div className="m-auto">Unauthorized to view this page</div>
    </div>
  );
}
