import { useCallback, useEffect, useMemo } from "react";
import CatalogList from "../../components/CatalogList/CatalogList";
import SideBar from "../../components/SideBar/SideBar";
import LoadMoreButton from "../../components/ui/buttons/LoadMoreButton/LoadMoreButton";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
// import { useDispatch, useSelector } from "react-redux";
import { getCampers } from "../../redux/campers/operations";
import {
  resetItems,
  resetPagination,
  setPage,
} from "../../redux/campers/slice";
import {
  selectCampers,
  selectLoading,
  selectError,
  selectPage,
  selectTotalPages,
} from "../../redux/campers/selectors";
import { useSearchParams } from "react-router";
import styles from "./CatalogPage.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectFilters } from "../../redux/filters/selectors";
import { addFilters, resetFilter } from "../../redux/filters/slice";
// import { addFilters } from "../../redux/filters/slice";

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCampers);
  const isLoading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const currentPage = useAppSelector(selectPage);
  const totalPages = useAppSelector(selectTotalPages);

  const [params, setParams] = useSearchParams();

  useEffect(() => {
    dispatch(resetItems());
    dispatch(resetPagination());
    dispatch(resetFilter());

    if (!params.get("page")) {
      const newParams = new URLSearchParams();
      newParams.set("page", "1");
      setParams(newParams);
    }
  }, [dispatch, params, setParams]);

  useEffect(() => {
    const newParams = new URLSearchParams(params);
    newParams.set("page", currentPage.toString());
    setParams(newParams);

    const url = newParams.toString();
    dispatch(addFilters(url));
  }, [dispatch, currentPage, params, setParams]);

  // useEffect(() => {
  //   if (page === 1) dispatch(resetItems());
  //   dispatch(getCampers(url));
  // }, [dispatch, page, url]);

  // const fetchData = useCallback(() => {
  //   // if (currentPage === 1) dispatch(resetItems());

  //   // const fetchCampers = async () => {
  //   //   await dispatch(getCampers());
  //   // };
  //   // fetchCampers();

  //   dispatch(getCampers());
  // }, [dispatch, currentPage]);

  useEffect(() => {
    // fetchData();
    dispatch(getCampers());
  }, [dispatch, currentPage]);

  // const handlePageChange = () => {
  //   const nextPage = page + 1;
  //   dispatch(setPage(nextPage));
  // };
  const handlePageChange = () => {
    dispatch(setPage(currentPage + 1));
  };

  const shouldShowLoadMore =
    items.length > 0 && currentPage < totalPages && !isLoading;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* <div className={styles.sideBarWrapper}>
          <SideBar />
        </div> */}
        {!isLoading && (
          <div className={styles.catalogWrapper}>
            <CatalogList />
            {shouldShowLoadMore && (
              <LoadMoreButton type="button" onClick={handlePageChange} />
            )}
          </div>
        )}
        {isLoading && <Loader />}
        {error && <ErrorMessage />}
      </div>
    </section>
  );
};

export default CatalogPage;
