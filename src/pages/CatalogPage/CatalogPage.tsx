import { useEffect, useMemo } from "react";
import CatalogList from "../../components/CatalogList/CatalogList";
import SideBar from "../../components/SideBar/SideBar";
import LoadMoreButton from "../../components/ui/buttons/LoadMoreButton/LoadMoreButton";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { getCampers } from "../../redux/campers/operations";
import { setPage } from "../../redux/campers/slice";
import {
  selectCampers,
  selectLoading,
  selectError,
  selectPage,
  selectTotalPages,
} from "../../redux/campers/selectors";
import styles from "./CatalogPage.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectFilters } from "../../redux/filters/selectors";
import { useSearchParams } from "react-router";
import { setUrl } from "../../redux/filters/slice";

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCampers);
  const isLoading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const currentPage = useAppSelector(selectPage);
  const totalPages = useAppSelector(selectTotalPages);
  const url = useAppSelector(selectFilters);
  const [params, setParams] = useSearchParams();

  // Memoize the URL to avoid unnecessary re-renders
  const memoizedUrl = useMemo(() => {
    const updateUrl = new URLSearchParams(params);
    updateUrl.set("page", currentPage.toString());
    return updateUrl.toString();
  }, [params, currentPage]);

  useEffect(() => {
    // Update URL params and dispatch the URL to Redux state
    const updateUrl = new URLSearchParams(params);
    updateUrl.set("page", currentPage.toString());
    setParams(updateUrl);
    dispatch(setUrl(updateUrl.toString()));
  }, [dispatch, currentPage, params]);

  useEffect(() => {
    // Fetch campers based on the URL from Redux state
    if (url) {
      dispatch(getCampers(url));
    }
  }, [dispatch, url]);

  // useEffect(() => {
  //   const updateUrl = new URLSearchParams(params);
  //   updateUrl.set("page", currentPage.toString());
  //   setParams(updateUrl);

  //   dispatch(setUrl(updateUrl.toString()));
  //   dispatch(getCampers(updateUrl.toString()));
  // }, [dispatch, currentPage, url]);

  const handlePageChange = () => {
    dispatch(setPage(currentPage + 1));
  };
  console.log("currentPage :>> ", currentPage);
  const shouldShowLoadMore =
    items.length > 0 && currentPage < totalPages && !isLoading;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sideBarWrapper}>
          <SideBar />
        </div>

        <div className={styles.catalogWrapper}>
          {items.length > 0 && <CatalogList />}
          {shouldShowLoadMore && (
            <LoadMoreButton type="button" onClick={handlePageChange} />
          )}
          {isLoading && <Loader />}
          {error && <ErrorMessage />}
        </div>
      </div>
    </section>
  );
};

export default CatalogPage;
