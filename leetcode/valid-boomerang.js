function validBoomerang(points) {
  const [p1, p2, p3] = points;

  // Check if the three points are distinct
  if (p1[0] === p2[0] && p1[1] === p2[1]) return false;
  if (p1[0] === p3[0] && p1[1] === p3[1]) return false;
  if (p2[0] === p3[0] && p2[1] === p3[1]) return false;

  // Check if the points are collinear using the area of the triangle formula
  return (
    (p2[0] - p1[0]) * (p3[1] - p1[1]) !== (p3[0] - p1[0]) * (p2[1] - p1[1])
  );
}

var isBoomerang = function (points) {
  if (points[0] === points[1] && points[1] === points[2]) return false;

  return (
    (points[1][0] - points[0][0]) * (points[2][1] - points[0][1]) !==
    (points[1][1] - points[0][1]) * (points[2][0] - points[0][0])
  );
};
