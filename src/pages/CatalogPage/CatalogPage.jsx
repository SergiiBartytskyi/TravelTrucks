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

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCampers);
  const isLoading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const currentPage = useAppSelector(selectPage);
  const totalPages = useAppSelector(selectTotalPages);

  const [params, setParams] = useSearchParams();

  useEffect(() => {
    params.set("page", currentPage.toString());
    params.set("limit", "5");
    setParams(params);
  }, [currentPage, params, setParams]);
  const url = params.toString();
  console.log("url :>> ", url);

  useEffect(() => {
    dispatch(addFilters(url));
    dispatch(getCampers());
  }, [dispatch, url]);

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
