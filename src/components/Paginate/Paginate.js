// import React from 'react';
// import PropTypes from 'prop-types';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/styles';
// import { colors } from '@material-ui/core';
// import ReactPaginate from 'react-paginate';

// const useStyles = makeStyles(theme => ({
//   root: {
//     ...theme.typography.button,
//     listStyle: 'none',
//     userSelect: 'none',
//     display: 'flex',
//     alignItems: 'center'
//   },
//   active: {},
//   activeLink: {},
//   break: {},
//   breakLink: {},
//   disabled: {},
//   next: {
//     marginLeft: theme.spacing(1)
//   },
//   nextLink: {
//     padding: '6px 16px',
//     outline: 'none',
//     cursor: 'pointer',
//     borderRadius: 4,
//     '&:hover': {
//       backgroundColor: colors.blueGrey[50]
//     }
//   },
//   page: {},
//   pageLink: {
//     color: theme.palette.text.secondary,
//     padding: theme.spacing(1),
//     outline: 'none',
//     cursor: 'pointer',
//     width: 40,
//     height: 40,
//     borderRadius: '50%',
//     display: 'block',
//     textAlign: 'center',
//     '&:hover': {
//       backgroundColor: colors.blueGrey[50],
//       color: theme.palette.text.primary
//     },
//     '&$activeLink': {
//       backgroundColor: colors.blueGrey[50],
//       color: theme.palette.text.primary
//     }
//   },
//   previous: {
//     marginRight: theme.spacing(1)
//   },
//   previousLink: {
//     padding: '6px 16px',
//     outline: 'none',
//     cursor: 'pointer',
//     borderRadius: 4,
//     '&:hover': {
//       backgroundColor: colors.blueGrey[50]
//     }
//   }
// }));

// const Paginate = props => {
//   const {
//     pageCount,
//     pageRangeDisplayed,
//     onPageChange,
//     postsPerPage, totalPosts, paginate ,
//     className,
//     ...rest
//   } = props;

//   const classes = useStyles();
//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }
//   return (
//     <ReactPaginate
//       activeClassName={classes.active}
//       activeLinkClassName={classes.activeLink}
//       breakClassName={classes.break}
//       breakLabel="..."
//       breakLinkClassName={classes.breakLink}
//       containerClassName={clsx(classes.root, className)}
//       disabledClassName={classes.disabled}
//       marginPagesDisplayed={2}
//       nextClassName={classes.next}
//       nextLabel="next"
//       nextLinkClassName={classes.nextLink}
//       onPageChange={onPageChange}
//       pageClassName={classes.page}
//       pageCount={pageCount}
//       pageLinkClassName={classes.pageLink}
//       pageRangeDisplayed={pageRangeDisplayed}
//       previousClassName={classes.previous}
//       previousLabel="previous"
//       previousLinkClassName={classes.previousLink}
//       subContainerClassName="pages pagination"
//       {...rest}
//     />
//   );
// };

// Paginate.propTypes = {
//   className: PropTypes.string,
//   onPageChange: PropTypes.func.isRequired,
//   pageCount: PropTypes.number.isRequired,
//   pageRangeDisplayed: PropTypes.number.isRequired
// };

// Paginate.defaultProps = {
//   onPageChange: () => {},
//   pageRangeDisplayed: 5
// };

// export default Paginate;

import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
        {/* <ul className="pagination">
          {pageNumbers.map(number => (
            <li className="page-item" key={number}>
              <a
                onClick={() => paginate(number)}
               
              >
                {number}
              </a>
            </li>
          ))}
        </ul> */}
    </div>
  );
};

export default Pagination;
