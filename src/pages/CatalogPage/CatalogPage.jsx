import { useEffect } from "react";
import CatalogList from "../../components/CatalogList/CatalogList";
import SideBar from "../../components/SideBar/SideBar";
import LoadMoreButton from "../../components/ui/buttons/LoadMoreButton/LoadMoreButton";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
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
// import { addFilters } from "../../redux/filters/slice";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCampers);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);
  // const page = useSelector(selectPage) || 1;
  const totalPages = useSelector(selectTotalPages);
  const [params] = useSearchParams();
  // const [params, setParams] = useSearchParams();
  // params.set("page", page);
  // setParams(params);
  const url = params.toString();
  // console.log("url CatalogPage :>> ", url);
  // dispatch(addFilters(url));

  // useEffect(() => {
  //   dispatch(resetItems());
  //   dispatch(resetPagination());
  // }, [dispatch]);

  useEffect(() => {
    if (page === 1) dispatch(resetItems());
    dispatch(getCampers(url));
  }, [dispatch, page, url]);

  const handlePageChange = () => {
    const nextPage = page + 1;
    dispatch(setPage(nextPage));
  };

  const shouldShowLoadMore =
    items.length > 0 && page < totalPages && !isLoading;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sideBarWrapper}>
          <SideBar />
        </div>
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
