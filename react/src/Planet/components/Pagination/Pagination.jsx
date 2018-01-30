import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export const Paging = (props) => {
    const { currentPage, onNext, onPrev, pageLength, showLoading } = props
    return (
        <Pagination size="lg">
            <PaginationItem disabled={showLoading || currentPage === 1 || pageLength === 0}>
                <PaginationLink previous onClick={onPrev} />
            </PaginationItem>
            <PaginationItem active>
                <PaginationLink>
                    {currentPage}
                </PaginationLink>
            </PaginationItem>
            <PaginationItem disabled={showLoading || currentPage === pageLength || pageLength === 0}>
                <PaginationLink next onClick={onNext} />
            </PaginationItem>
        </Pagination>
    );
}