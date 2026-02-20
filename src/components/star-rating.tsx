interface StarRatingProps {
  rating: number; // Can be 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5
  className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  className = "",
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className={`flex gap-1 ${className}`}>
      {/* Full stars */}
      {[...Array(fullStars)].map((_, i) => (
        <i key={i.toString()} className="bi bi-star-fill text-primary"></i>
      ))}

      {/* Half star if needed */}
      {hasHalfStar && <i className="bi bi-star-half text-primary"></i>}

      {/* Empty stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <i key={i.toString()} className="bi bi-star text-primary"></i>
      ))}
    </div>
  );
};
