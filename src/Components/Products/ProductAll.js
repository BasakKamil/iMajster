import React from 'react';
import ProductDetails from '../Products/ProductDetails';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence  } from 'framer-motion';

function ProductAll(props){
 

    const { t } = useTranslation();
    const {products} = props;   



 
             if(Array.isArray(products)){
                return(   
                    <motion.div 
                        layout
                        className="ProductShow">
                        <AnimatePresence >
                         {products && products.map(product => {
                            return (
                                <ProductDetails product={product} key={product.id} />
                            ) 
                        })}
                        </AnimatePresence>
                    </motion.div>
                    
                )
            }
            else return ( <div class="Nic">{t('Stock')}</div>) 
    }


export default ProductAll