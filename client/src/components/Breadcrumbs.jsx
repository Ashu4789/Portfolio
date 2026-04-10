import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Breadcrumbs = ({ customTitle }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex py-3 px-4 glass rounded-xl w-fit mb-8 items-center space-x-2 text-xs md:text-sm"
    >
      <Link to="/" className="text-slate-500 hover:text-emerald-500 transition-colors font-medium">
        Home
      </Link>
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
          <React.Fragment key={name}>
            <span className="text-slate-400">/</span>
            {isLast ? (
              <span className="text-emerald-600 dark:text-emerald-400 font-bold capitalize">
                {customTitle || name.replace(/-/g, ' ')}
              </span>
            ) : (
              <Link to={routeTo} className="text-slate-500 hover:text-emerald-500 transition-colors font-medium capitalize">
                {name.replace(/-/g, ' ')}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </motion.nav>
  );
};

export default Breadcrumbs;
