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
import styles from "./CatalogPage.module.css";
import { useSearchParams } from "react-router";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCampers);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const [params] = useSearchParams();
  const url = params.toString();

  useEffect(() => {
    dispatch(resetItems());
    dispatch(resetPagination());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCampers(url));
  }, [dispatch, page, url]);

  const handlePageChange = () => {
    const nextPage = page + 1;
    dispatch(setPage(nextPage));
  };

  const shouldShowLoadMore =
    items.length > 0 && page < totalPages && !isLoading;

  return (
    <>
      <div className={styles.section}>
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
      </div>
    </>
  );
};

export default CatalogPage;
