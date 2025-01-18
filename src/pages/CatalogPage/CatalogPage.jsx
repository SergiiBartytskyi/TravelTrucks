import { useEffect } from "react";
import CatalogList from "../../components/CatalogList/CatalogList";
import SideBar from "../../components/SideBar/SideBar";
import LoadMoreButton from "../../components/ui/buttons/LoadMoreButton/LoadMoreButton";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { getCampers } from "../../redux/campers/operations";
import { resetItems, setPage } from "../../redux/campers/slice";
import {
  selectCampers,
  selectLoading,
  selectError,
  selectPage,
  selectTotalPages,
} from "../../redux/campers/selectors";
import { selectFilters } from "../../redux/filters/selectors";
import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCampers);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    if (page === 1) dispatch(resetItems());

    dispatch(getCampers());
  }, [dispatch, page, filters]);

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
                <LoadMoreButton onClick={handlePageChange} />
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
