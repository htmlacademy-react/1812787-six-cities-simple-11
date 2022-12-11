export function countRatingPercent(rating: number): string {
  return `${((Math.round(rating) / 5) * 100).toString()}%`;
}
