import { memo } from 'react';

interface LoadingSkeletonProps {
  height?: string;
  className?: string;
}

export const PageLoadingSkeleton = memo(function PageLoadingSkeleton({ 
  height = 'min-h-[400px]',
  className = '' 
}: LoadingSkeletonProps) {
  return (
    <div className={`${height} ${className} animate-pulse bg-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
});

export const RouteLoadingSkeleton = memo(function RouteLoadingSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent mb-4"></div>
        <p className="text-gray-600">Loading page...</p>
      </div>
    </div>
  );
});

export default PageLoadingSkeleton;




