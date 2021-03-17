const goods = {
  list: "SELECT `goods`.`id`, `goods`.`img`, `goods`.`name`, `goods`.`desc`, `goods`.`price`, `goods`.`nums`, `goods`.`status`, `goods`.`sequence`, `goods`.`shop_id`, `goods`.`shelves_start_at`, `goods`.`shelves_end_at`, `good_details`.`detail_desc`, `good_details`.`detail_num`, `good_details`.`id` AS gdId FROM `goods` LEFT JOIN `good_details` ON `goods`.`id` = `good_details`.`good_id`",
};
module.exports.goods = goods;
